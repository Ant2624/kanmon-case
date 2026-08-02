/* Shared partnerships agent.
   One person for the browser (localStorage), synced across every page surface:
   chat header, teaser, kickoffs, contact card, and form copy. */
(function () {
  var ROSTER = [
    {
      id: 'maya',
      first: 'Maya',
      name: 'Maya Chen',
      initial: 'M',
      role: 'Your partnerships manager',
      presence: 'Usually replies in a few minutes',
      blurb: 'I am your partnerships manager for this conversation. Tell me how your customers get paid and I will scope the program.'
    },
    {
      id: 'jordan',
      first: 'Jordan',
      name: 'Jordan Blake',
      initial: 'J',
      role: 'Your partnerships manager',
      presence: 'Usually replies in a few minutes',
      blurb: 'I am your partnerships manager for this conversation. I work with product and BD leads on program launches.'
    },
    {
      id: 'priya',
      first: 'Priya',
      name: 'Priya Shah',
      initial: 'P',
      role: 'Your partnerships manager',
      presence: 'Usually replies in a few minutes',
      blurb: 'I am your partnerships manager for this conversation. I map cash gaps to the right Kanmon products.'
    },
    {
      id: 'sam',
      first: 'Sam',
      name: 'Sam Okonkwo',
      initial: 'S',
      role: 'Your partnerships manager',
      presence: 'Usually replies in a few minutes',
      blurb: 'I am your partnerships manager for this conversation. I help teams go from first chat to a live program.'
    },
    {
      id: 'alex',
      first: 'Alex',
      name: 'Alex Rivera',
      initial: 'A',
      role: 'Your partnerships manager',
      presence: 'Usually replies in a few minutes',
      blurb: 'I am your partnerships manager for this conversation. I partner with platforms on revenue share, launch, and fit.'
    }
  ];

  var KEY = 'kanmon_concept_agent';
  var FORCE = /[?&]agent=([a-z]+)/i.exec(location.search);

  function byId(id) {
    if (!id) return null;
    for (var i = 0; i < ROSTER.length; i++) if (ROSTER[i].id === id) return ROSTER[i];
    return null;
  }

  function readStored() {
    try {
      return byId(localStorage.getItem(KEY)) || byId(sessionStorage.getItem(KEY));
    } catch (e) {
      try { return byId(sessionStorage.getItem(KEY)); } catch (e2) { return null; }
    }
  }

  function writeStored(id) {
    try { localStorage.setItem(KEY, id); } catch (e) {}
    try { sessionStorage.setItem(KEY, id); } catch (e) {}
  }

  var agent = null;
  if (FORCE) {
    agent = byId(FORCE[1].toLowerCase()) || ROSTER[Math.floor(Math.random() * ROSTER.length)];
    writeStored(agent.id);
  } else {
    agent = readStored();
    if (!agent) {
      agent = ROSTER[Math.floor(Math.random() * ROSTER.length)];
      writeStored(agent.id);
    } else {
      // keep session mirror in sync with local
      writeStored(agent.id);
    }
  }

  function idleLines(first) {
    return [
      '\ud83d\udc40 ' + first + ' is reviewing a term sheet while you look around\u2026',
      '\ud83d\udcb8 ' + first + ' just funded an invoice. No rush.',
      '\u2615 Quick coffee refill. Underwriting fuel.',
      '\ud83d\udccb ' + first + ' is tidying a credit file. Take your time.',
      '\ud83e\udd39 ' + first + ' is juggling three term sheets. Literally.',
      '\ud83e\uddee ' + first + ' is racing the underwriting model. It is winning.',
      '\ud83c\udfaf ' + first + ' hit inbox zero. Again.'
    ];
  }

  function buildApi(person) {
    return {
      roster: ROSTER,
      current: person,
      id: person.id,
      first: person.first,
      name: person.name,
      initial: person.initial,
      role: person.role,
      presence: person.presence,
      blurb: person.blurb,
      idle: idleLines(person.first),
      finalIdle: '\ud83d\udc40 Still here whenever you are.',
      who: person.first + ' \u00b7 Kanmon',
      typing: person.first + ' is typing\u2026',
      askCue: 'Ask ' + person.first,
      messageCue: 'Message ' + person.first,
      reachCue: 'Reach ' + person.first,
      chatWithCue: 'Chat with ' + person.first,
      keepChatCue: 'Keep chatting with ' + person.first
    };
  }

  function publish(person) {
    var api = buildApi(person);
    api.apply = fill;
    api.refresh = function () {
      var next = ROSTER[Math.floor(Math.random() * ROSTER.length)];
      if (ROSTER.length > 1) {
        while (next.id === person.id) next = ROSTER[Math.floor(Math.random() * ROSTER.length)];
      }
      writeStored(next.id);
      location.reload();
    };
    window.KanmonAgent = api;
    agent = person;
    return api;
  }

  function fill(root) {
    var scope = root && root.querySelectorAll ? root : document;
    var nodes = Array.prototype.slice.call(scope.querySelectorAll('[data-agent]'));
    // Deepest nodes first so parent textContent never wipes child bindings.
    nodes.sort(function (a, b) {
      var da = 0, db = 0, n = a;
      while (n.parentElement) { da++; n = n.parentElement; }
      n = b;
      while (n.parentElement) { db++; n = n.parentElement; }
      return db - da;
    });
    nodes.forEach(function (el) {
      var key = el.getAttribute('data-agent');
      var val = window.KanmonAgent[key];
      if (val == null) return;
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.value = val;
        return;
      }
      // Only replace direct text when the node is a leaf for agent text,
      // or when it has no nested [data-agent] descendants.
      if (el.querySelector('[data-agent]')) return;
      if (el.textContent !== String(val)) el.textContent = val;
    });
    scope.querySelectorAll('.ask-cue').forEach(function (el) {
      if (el.textContent !== window.KanmonAgent.askCue) el.textContent = window.KanmonAgent.askCue;
    });
  }

  publish(agent);

  // Chat toggle stays in the footer DOM for #chat-toggle:checked ~ .chat-panel.
  // Native label→checkbox focus scrolls that control into view. Toggle without focusing.
  function restoreScroll(y) {
    if (window.scrollY !== y) window.scrollTo(0, y);
  }

  function bindChatToggleScrollGuard() {
    var toggle = document.getElementById('chat-toggle');
    if (!toggle || toggle.__kanmonScrollGuard) return;
    toggle.__kanmonScrollGuard = true;

    document.addEventListener('click', function (e) {
      var label = e.target.closest && e.target.closest('label[for="chat-toggle"]');
      if (!label) return;
      // Nested controls inside the FAB (e.g. status cycle) handle their own clicks.
      if (e.target.closest && e.target.closest('.mini-cycle')) return;
      e.preventDefault();
      var y = window.scrollY;
      toggle.checked = !toggle.checked;
      try {
        toggle.dispatchEvent(new Event('change', { bubbles: true }));
      } catch (err) {
        var ev = document.createEvent('Event');
        ev.initEvent('change', true, false);
        toggle.dispatchEvent(ev);
      }
      if (document.activeElement === toggle) toggle.blur();
      restoreScroll(y);
      requestAnimationFrame(function () { restoreScroll(y); });
    }, true);

    toggle.addEventListener('focus', function () {
      var y = window.scrollY;
      requestAnimationFrame(function () { restoreScroll(y); });
    });
  }

  // On phones, lock page scroll while the panel is open so open/close does not jump.
  function bindChatBodyScrollLock() {
    var toggle = document.getElementById('chat-toggle');
    if (!toggle || toggle.__kanmonBodyLock) return;
    toggle.__kanmonBodyLock = true;
    var lockY = 0;
    function isMobile() {
      return window.matchMedia('(max-width:760px)').matches;
    }
    function lock() {
      if (!isMobile() || document.documentElement.classList.contains('chat-open')) return;
      lockY = window.scrollY;
      document.documentElement.classList.add('chat-open');
      document.body.style.top = '-' + lockY + 'px';
    }
    function unlock() {
      if (!document.documentElement.classList.contains('chat-open')) return;
      document.documentElement.classList.remove('chat-open');
      document.body.style.top = '';
      window.scrollTo(0, lockY);
    }
    toggle.addEventListener('change', function () {
      if (toggle.checked) lock();
      else unlock();
    });
    window.addEventListener('resize', function () {
      if (!toggle.checked) return;
      if (isMobile()) lock();
      else unlock();
    });
  }

  function boot() {
    fill(document);
    bindChatToggleScrollGuard();
    bindChatBodyScrollLock();
    // Re-apply when chat/teaser injects new nodes with data-agent hooks.
    if (window.MutationObserver && !window.__kanmonAgentObs) {
      window.__kanmonAgentObs = new MutationObserver(function (mutations) {
        for (var i = 0; i < mutations.length; i++) {
          var m = mutations[i];
          if (!m.addedNodes || !m.addedNodes.length) continue;
          for (var j = 0; j < m.addedNodes.length; j++) {
            var node = m.addedNodes[j];
            if (node.nodeType !== 1) continue;
            if (node.matches && (node.matches('[data-agent]') || node.matches('.ask-cue') || node.querySelector('[data-agent], .ask-cue'))) {
              fill(node.parentNode || document);
              return;
            }
          }
        }
      });
      window.__kanmonAgentObs.observe(document.documentElement, { childList: true, subtree: true });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

  // Cross-tab sync: if another tab switches agent, reload this one onto the same person.
  window.addEventListener('storage', function (e) {
    if (e.key !== KEY || !e.newValue) return;
    var next = byId(e.newValue);
    if (!next || next.id === agent.id) return;
    publish(next);
    try { sessionStorage.setItem(KEY, next.id); } catch (err) {}
    fill(document);
  });
})();
