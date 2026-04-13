window.SearchUI = {
  showEmptyBookmarksMessage({ container, t }) {
    container.innerHTML = '';
    const message = document.createElement('div');
    message.className = 'panel-card p-8 text-center text-slate-500 dark:text-slate-300';
    message.innerHTML = `<h2 class="text-lg font-semibold">${t('noBookmarksTitle')}</h2><p class="text-sm mt-2">${t('noBookmarksDesc')}</p>`;
    container.appendChild(message);
  },

  renderSearchResultsPanel({
    container,
    results,
    t,
    cleanDisplayUrl,
    renderBookmarks,
    closeSearchModal,
  }) {
    container.innerHTML = '';
    if (!results.length) {
      const empty = document.createElement('p');
      empty.className = 'text-sm text-slate-500 dark:text-slate-400 px-1 py-2';
      empty.textContent = t('searchNoResults');
      container.appendChild(empty);
      return;
    }

    results.slice(0, 80).forEach(result => {
      const item = result.item;
      const row = document.createElement('button');
      row.className = 'w-full text-left p-3 rounded-xl hover:bg-slate-100 dark:hover:pintree-bg-gray-800';
      const typeIcon = result.hitType === 'folder'
        ? '📁'
        : result.hitType === 'tag'
          ? '🏷️'
          : '🔗';
      row.innerHTML = `<div class="flex items-center gap-2">
          <span class="text-sm">${typeIcon}</span>
          <div class="text-sm font-medium text-slate-700 dark:text-slate-300 truncate">${item.title}</div>
        </div>
        <div class="text-xs text-slate-400 truncate pl-6">${cleanDisplayUrl(item.url || '')}</div>`;

      row.addEventListener('click', () => {
        const targetPath = item.path || [];
        if (item.type === 'folder') {
          renderBookmarks(item.children || [], targetPath);
        } else {
          const parent = targetPath[targetPath.length - 1];
          renderBookmarks(parent?.children || [], targetPath);
        }
        closeSearchModal();
      });

      container.appendChild(row);
    });
  },
};
