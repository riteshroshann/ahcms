/* ─────────────────────────────────
   Anonymous Community Forum
   Shared between student & admin
   ───────────────────────────────── */

import { api } from '../api.js';
import { getRole } from '../auth.js';
import { toast } from '../components/toast.js';

export async function renderForum(container) {
  container.innerHTML = `<div class="page-loading">Loading forum…</div>`;
  try {
    const posts = await api.get('/forum');
    renderPage(container, posts);
  } catch(e) {
    container.innerHTML = `<div class="page-error">Failed to load forum: ${e.message}</div>`;
  }
}

function renderPage(container, initialPosts) {
  const isAdmin = getRole() === 'admin';
  let posts = initialPosts;

  container.innerHTML = `
    <div class="page-enter" id="forum-page">
      <div class="page-header">
        <h2>Community Forum</h2>
        <p>${isAdmin ? 'Read all campus posts — posting is disabled for admins.' : 'Share thoughts anonymously with your campus community.'}</p>
      </div>

      ${!isAdmin ? `
        <div class="form-section" style="max-width: none; margin-bottom: var(--space-8);">
          <div class="form-section-title">✍️ New Post <span class="badge badge-pending" style="font-size: var(--text-xs);">Anonymous</span></div>
          <form id="forum-form" novalidate>
            <div class="form-group" style="margin-bottom: var(--space-4);">
              <label class="form-label" for="f-title">Title</label>
              <input type="text" class="form-input" id="f-title" placeholder="What's on your mind?" maxlength="120" required />
              <div class="form-error" id="err-f-title">Title is required</div>
            </div>
            <div class="form-group">
              <label class="form-label" for="f-content">Message</label>
              <textarea class="form-textarea" id="f-content" rows="3" placeholder="Speak freely — your identity is never stored." required></textarea>
              <div class="form-error" id="err-f-content">Message is required</div>
            </div>
            <div class="form-actions">
              <button type="submit" class="btn btn-primary" id="btn-post">Post Anonymously</button>
              <button type="reset" class="btn btn-secondary">Clear</button>
            </div>
          </form>
        </div>
      ` : `
        <div class="alert-banner alert-blue" style="margin-bottom: var(--space-6);">
          Viewing as Admin — posts are read-only. Student identities are never stored.
        </div>
      `}

      <!-- Posts Feed -->
      <div id="forum-feed"></div>
      <div id="forum-empty" style="display:none; text-align:center; padding: var(--space-16); color: var(--text-tertiary);">
        No posts yet. Be the first to share!
      </div>
    </div>
  `;

  function renderFeed() {
    const feed = document.getElementById('forum-feed');
    const empty = document.getElementById('forum-empty');
    if (posts.length === 0) {
      feed.innerHTML = '';
      empty.style.display = 'block';
      return;
    }
    empty.style.display = 'none';
    feed.innerHTML = posts.map(p => `
      <div class="forum-post">
        <div class="forum-post-header">
          <div class="forum-avatar">A</div>
          <div>
            <div class="forum-post-title">${escHtml(p.title)}</div>
            <div class="forum-post-meta">Anonymous · ${formatTime(p.created_at)}</div>
          </div>
        </div>
        <div class="forum-post-body">${escHtml(p.content)}</div>
      </div>
    `).join('');
  }

  if (!isAdmin) {
    const form = document.getElementById('forum-form');
    form.addEventListener('submit', async e => {
      e.preventDefault();
      let valid = true;
      container.querySelectorAll('.form-error').forEach(el => el.classList.remove('visible'));

      const title   = document.getElementById('f-title').value.trim();
      const content = document.getElementById('f-content').value.trim();

      if (!title)   { document.getElementById('err-f-title').classList.add('visible');   valid = false; }
      if (!content) { document.getElementById('err-f-content').classList.add('visible'); valid = false; }
      if (!valid) return;

      const btn = document.getElementById('btn-post');
      btn.disabled = true; btn.textContent = 'Posting…';
      try {
        const newPost = await api.post('/forum', { title, content });
        posts = [newPost, ...posts];
        toast('Posted anonymously!', 'success');
        form.reset();
        renderFeed();
      } catch(err) {
        toast(err.message, 'error');
      } finally {
        btn.disabled = false; btn.textContent = 'Post Anonymously';
      }
    });

    form.addEventListener('reset', () =>
      container.querySelectorAll('.form-error').forEach(el => el.classList.remove('visible'))
    );
  }

  renderFeed();
  requestAnimationFrame(() =>
    document.getElementById('forum-page')?.classList.replace('page-enter', 'page-active')
  );
}

function escHtml(str) {
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function formatTime(ts) {
  try {
    return new Date(ts).toLocaleString('en-IN', { day:'numeric', month:'short', year:'numeric', hour:'2-digit', minute:'2-digit' });
  } catch { return ts; }
}
