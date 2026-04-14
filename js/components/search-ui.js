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
    openBookmarkInNewTab,
    revealBookmarkPath,
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
      const row = document.createElement('div');
      row.className = 'group w-full text-left p-3 rounded-xl hover:bg-slate-100 dark:hover:pintree-bg-gray-800';
      const typeIcon = result.hitType === 'folder'
        ? '📁'
        : result.hitType === 'tag'
          ? '🏷️'
          : '🔗';
      row.innerHTML = `<div class="flex items-start gap-3">
          <button type="button" class="search-result-main flex-1 min-w-0 text-left">
            <div class="flex items-center gap-2">
              <span class="text-sm">${typeIcon}</span>
              <div class="text-sm font-medium text-slate-700 dark:text-slate-300 truncate">${item.title}</div>
            </div>
            <div class="text-xs text-slate-400 truncate pl-6">${cleanDisplayUrl(item.url || '')}</div>
          </button>
          <div class="search-result-actions opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-150 flex items-center gap-1 mt-0.5"></div>
        </div>`;

      const mainAction = row.querySelector('.search-result-main');
      const actionWrap = row.querySelector('.search-result-actions');

      mainAction.addEventListener('click', () => {
        if (item.type === 'link') {
          openBookmarkInNewTab(item);
          closeSearchModal();
          return;
        }
        revealBookmarkPath(item);
        closeSearchModal();
      });

      if (item.type === 'link' && actionWrap) {
        const openBtn = document.createElement('button');
        openBtn.type = 'button';
        openBtn.className = 'icon-action-btn h-8 w-8';
        openBtn.title = t('searchOpenLink');
        openBtn.setAttribute('aria-label', t('searchOpenLink'));
        openBtn.innerHTML = '<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 5l7 7-7 7"></path></svg>';
        openBtn.addEventListener('click', (event) => {
          event.stopPropagation();
          openBookmarkInNewTab(item);
          closeSearchModal();
        });

        const pathBtn = document.createElement('button');
        pathBtn.type = 'button';
        pathBtn.className = 'icon-action-btn h-8 w-8';
        pathBtn.title = t('searchLocatePath');
        pathBtn.setAttribute('aria-label', t('searchLocatePath'));
        pathBtn.innerHTML = '<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z"></path></svg>';
        pathBtn.addEventListener('click', (event) => {
          event.stopPropagation();
          revealBookmarkPath(item, { highlightBookmark: true });
          closeSearchModal();
        });

        actionWrap.append(openBtn, pathBtn);
      }

      container.appendChild(row);
    });
  },
};
