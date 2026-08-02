/* Shared partnerships agent. One real person per browser session; a new session can surface someone else. */
(function () {
  var ROSTER = [
    {
      id: 'maya',
      first: 'Maya',
      name: 'Maya Chen',
      initial: 'M',
      role: 'Partnerships at Kanmon',
      presence: 'Usually replies in a few minutes',
      blurb: 'I help platform teams scope embedded lending programs.'
    },
    {
      id: 'jordan',
      first: 'Jordan',
      name: 'Jordan Blake',
      initial: 'J',
      role: 'Partnerships at Kanmon',
      presence: 'Usually replies in a few minutes',
      blurb: 'I work with product and BD leads on partner launches.'
    },
    {
      id: 'priya',
      first: 'Priya',
      name: 'Priya Shah',
      initial: 'P',
      role: 'Partnerships at Kanmon',
      presence: 'Usually replies in a few minutes',
      blurb: 'I map cash-gap moments to the right Kanmon products.'
    },
    {
      id: 'sam',
      first: 'Sam',
      name: 'Sam Okonkwo',
      initial: 'S',
      role: 'Partnerships at Kanmon',
      presence: 'Usually replies in a few minutes',
      blurb: 'I help teams go from first conversation to a live program.'
    },
    {
      id: 'alex',
      first: 'Alex',
      name: 'Alex Rivera',
      initial: 'A',
      role: 'Partnerships at Kanmon',
      presence: 'Usually replies in a few minutes',
      blurb: 'I partner with platforms on economics, launch, and fit.'
    }
  ];

  var KEY = 'kanmon_concept_agent';
  var FORCE = /[?&]agent=([a-z]+)/i.exec(location.search);
  var agent = null;

  function byId(id) {
    for (var i = 0; i < ROSTER.length; i++) if (ROSTER[i].id === id) return ROSTER[i];
    return null;
  }

  if (FORCE) {
    agent = byId(FORCE[1].toLowerCase()) || ROSTER[Math.floor(Math.random() * ROSTER.length)];
    try { sessionStorage.setItem(KEY, agent.id); } catch (e) {}
  } else {
    try {
      var saved = sessionStorage.getItem(KEY);
      agent = byId(saved);
    } catch (e) {}
    if (!agent) {
      agent = ROSTER[Math.floor(Math.random() * ROSTER.length)];
      try { sessionStorage.setItem(KEY, agent.id); } catch (e) {}
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

  window.KanmonAgent = {
    roster: ROSTER,
    current: agent,
    id: agent.id,
    first: agent.first,
    name: agent.name,
    initial: agent.initial,
    role: agent.role,
    presence: agent.presence,
    blurb: agent.blurb,
    idle: idleLines(agent.first),
    finalIdle: '\ud83d\udc40 Still here whenever you are.',
    who: agent.first + ' \u00b7 Kanmon',
    typing: agent.first + ' is typing\u2026',
    askCue: 'Ask ' + agent.first,
    refresh: function () {
      try { sessionStorage.removeItem(KEY); } catch (e) {}
      var next = ROSTER[Math.floor(Math.random() * ROSTER.length)];
      if (ROSTER.length > 1) {
        while (next.id === agent.id) next = ROSTER[Math.floor(Math.random() * ROSTER.length)];
      }
      try { sessionStorage.setItem(KEY, next.id); } catch (e) {}
      location.reload();
    }
  };

  function fill(root) {
    var scope = root || document;
    scope.querySelectorAll('[data-agent]').forEach(function (el) {
      var key = el.getAttribute('data-agent');
      var val = window.KanmonAgent[key];
      if (val == null) return;
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.value = val;
      else el.textContent = val;
    });
    scope.querySelectorAll('.ask-cue').forEach(function (el) {
      el.textContent = window.KanmonAgent.askCue;
    });
    scope.querySelectorAll('.k-av[data-agent="initial"], .mini-av[data-agent="initial"]').forEach(function (el) {
      el.textContent = window.KanmonAgent.initial;
    });
  }

  window.KanmonAgent.apply = fill;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { fill(); });
  } else {
    fill();
  }
})();
