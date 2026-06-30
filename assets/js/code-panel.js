/* Generic code-tab panel: N tabs (1 for a problem with no alternate approach, 3+ for one with
   several), each rendered with a small regex-based syntax tint, no external highlighting
   library. The tab <button role="tab"> markup itself is hand-authored per page (copy one button
   per tabs[] entry from _template.html); this module only switches content and re-tints it.
   `lines` keeps the [text, kindOrNull] shape ("cm" = comment, rendered verbatim/italic, no
   keyword/type/number tinting applied inside a comment). `types` (capitalized custom
   identifiers such as Solution/ListNode/TreeNode) can't be guessed generically and must be
   supplied per page; `keywords` has a reasonable Java-ish default but can be overridden. */
(function (global) {
  "use strict";

  var DEFAULT_KEYWORDS = [
    "class", "public", "private", "protected", "static", "final", "void",
    "int", "long", "double", "float", "boolean", "char", "String",
    "for", "while", "if", "else", "return", "new", "break", "continue",
    "switch", "case", "default", "true", "false", "null", "this",
    "extends", "implements", "interface", "import", "package",
    "throw", "throws", "try", "catch", "finally"
  ];

  function escapeHtml(text) {
    return text.replace(/&/g, "&amp;").replace(/</g, "&lt;");
  }

  function highlightLine(text, keywordRe, typeRe) {
    var escaped = escapeHtml(text);
    escaped = escaped.replace(keywordRe, '<span class="tok-kw">$1</span>');
    if (typeRe) escaped = escaped.replace(typeRe, '<span class="tok-type">$1</span>');
    escaped = escaped.replace(/\b(\d+)\b/g, '<span class="tok-num">$1</span>');
    return escaped;
  }

  function create(opts) {
    opts = opts || {};
    var tabs = opts.tabs || [];
    if (!tabs.length) throw new Error("CodePanel.create requires at least one tab");

    var bodyEl = document.getElementById(opts.bodyId || "codeBody");
    var noteEl = document.getElementById(opts.noteId || "codeNote");
    var keywordRe = new RegExp("\\b(" + (opts.keywords || DEFAULT_KEYWORDS).join("|") + ")\\b", "g");
    var typeRe = opts.types && opts.types.length
      ? new RegExp("\\b(" + opts.types.join("|") + ")\\b", "g")
      : null;

    function render(tabId) {
      var tab = tabs.filter(function (t) { return t.id === tabId; })[0] || tabs[0];
      var html = tab.lines.map(function (pair) {
        var text = pair[0], kind = pair[1];
        if (kind === "cm") return '<span class="tok-cm">' + escapeHtml(text) + "</span>";
        return highlightLine(text, keywordRe, typeRe);
      }).join("\n");
      if (bodyEl) bodyEl.innerHTML = html;
      if (noteEl) noteEl.textContent = tab.note || "";
    }

    tabs.forEach(function (tab) {
      var btn = document.getElementById(tab.id);
      if (!btn) return;
      btn.addEventListener("click", function () {
        tabs.forEach(function (t) {
          var other = document.getElementById(t.id);
          if (other) other.setAttribute("aria-selected", String(t.id === tab.id));
        });
        render(tab.id);
      });
    });

    render(tabs[0].id);
  }

  global.CodePanel = { create: create };
})(window);
