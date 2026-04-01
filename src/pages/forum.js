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
      <div class="forum-post card" style="background:var(--bg-primary); padding:var(--space-4); margin-bottom:var(--space-4); border-radius:var(--radius-md); border:1px solid var(--border-subtle);">
        <div class="forum-post-header" style="display:flex; align-items:center; gap:var(--space-3); margin-bottom:var(--space-2);">
          <div class="forum-avatar" style="font-size:24px; background:transparent; border:none;">${p.avatar_icon || '👤'}</div>
          <div>
            <div class="forum-post-title" style="font-weight:600; color:var(--text-primary);">${escHtml(p.title)}</div>
            <div class="forum-post-meta" style="font-size:var(--text-xs); color:var(--text-tertiary);">${escHtml(p.avatar_name || 'Anonymous')} · ${formatTime(p.created_at)}</div>
          </div>
        </div>
        <div class="forum-post-body" style="font-size:var(--text-sm); color:var(--text-secondary); line-height:1.6; margin-left:var(--space-10); margin-bottom:var(--space-3);">${escHtml(p.content)}</div>
        
        <div class="forum-post-actions" style="margin-left:var(--space-10); display:flex; gap:var(--space-4); align-items:center; margin-bottom:var(--space-2);">
          <div style="display:flex; background:var(--bg-elevated); border-radius:var(--radius-sm); border:1px solid var(--border-subtle); overflow:hidden;">
            <button class="vote-btn" data-type="post" data-id="${p.post_id}" data-dir="up" style="background:transparent; border:none; padding:4px 8px; cursor:pointer; color:var(--text-secondary);">⇧ ${p.upvotes || 0}</button>
            <div style="width:1px; background:var(--border-subtle);"></div>
            <button class="vote-btn" data-type="post" data-id="${p.post_id}" data-dir="down" style="background:transparent; border:none; padding:4px 8px; cursor:pointer; color:var(--text-secondary);">⇩ ${p.downvotes || 0}</button>
          </div>
          ${!isAdmin ? `<button class="reply-toggle-btn" data-post-id="${p.post_id}" style="background:transparent; border:none; color:var(--text-tertiary); font-size:var(--text-xs); cursor:pointer; display:flex; gap:4px; align-items:center;">💬 Reply</button>` : ''}
        </div>

        <!-- Replies -->
        ${p.replies && p.replies.length > 0 ? `
          <div class="forum-replies" style="margin-left:var(--space-10); border-left:2px solid var(--border-subtle); padding-left:var(--space-4); margin-top:var(--space-4); display:flex; flex-direction:column; gap:var(--space-4);">
            ${p.replies.map(r => `
              <div class="forum-reply">
                <div class="forum-post-header" style="display:flex; align-items:center; gap:var(--space-2); margin-bottom:4px;">
                  <div class="forum-avatar" style="font-size:16px; background:transparent; border:none; width:auto; height:auto;">${r.avatar_icon || '👤'}</div>
                  <div class="forum-post-meta" style="font-size:var(--text-xs); color:var(--text-tertiary);">${escHtml(r.avatar_name || 'Anonymous')} · ${formatTime(r.created_at)}</div>
                </div>
                <div class="forum-post-body" style="font-size:var(--text-sm); line-height:1.5; color:var(--text-secondary); margin-left:var(--space-6);">${escHtml(r.content)}</div>
                <div class="forum-post-actions" style="margin-left:var(--space-6); display:flex; gap:var(--space-3); margin-top:4px;">
                  <div style="display:flex; background:var(--bg-elevated); border-radius:var(--radius-sm); border:1px solid var(--border-subtle); overflow:hidden;">
                    <button class="vote-btn" data-type="reply" data-id="${r.reply_id}" data-dir="up" style="background:transparent; border:none; padding:2px 6px; cursor:pointer; font-size:11px; color:var(--text-secondary);">⇧ ${r.upvotes || 0}</button>
                    <div style="width:1px; background:var(--border-subtle);"></div>
                    <button class="vote-btn" data-type="reply" data-id="${r.reply_id}" data-dir="down" style="background:transparent; border:none; padding:2px 6px; cursor:pointer; font-size:11px; color:var(--text-secondary);">⇩ ${r.downvotes || 0}</button>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        ` : ''}

        <!-- Reply Form Content -->
        ${!isAdmin ? `
          <div id="reply-form-${p.post_id}" style="display:none; margin-left:var(--space-10); margin-top:var(--space-4);">
            <textarea id="reply-input-${p.post_id}" class="form-textarea" rows="2" placeholder="Write an anonymous reply..." style="padding:var(--space-2); min-height:60px;"></textarea>
            <div style="margin-top:var(--space-2); display:flex; gap:var(--space-2);">
              <button class="btn btn-primary reply-submit-btn" data-post-id="${p.post_id}" style="padding:4px 12px; font-size:12px;">Submit Reply</button>
              <button class="btn btn-secondary reply-toggle-btn" data-post-id="${p.post_id}" style="padding:4px 12px; font-size:12px;">Cancel</button>
            </div>
          </div>
        ` : ''}
      </div>
    `).join('');
  }

  // Event Delegation for feed interactions
  const feedContainer = document.getElementById('forum-feed');
  feedContainer.addEventListener('click', async e => {
    // 1. Voting
    const voteBtn = e.target.closest('.vote-btn');
    if (voteBtn && !voteBtn.disabled) {
      const type = voteBtn.dataset.type;
      const id = voteBtn.dataset.id;
      const dir = voteBtn.dataset.dir;
      
      voteBtn.disabled = true;
      try {
        const updated = await api.patch('/forum/vote', { type, id: parseInt(id, 10), dir });
        // Optimistic UI update logic: update the local state manually without redrawing the whole feed.
        if (type === 'post') {
          const post = posts.find(p => p.post_id === parseInt(id, 10));
          if (post) {
            post.upvotes = updated.upvotes;
            post.downvotes = updated.downvotes;
          }
        } else {
          for (const post of posts) {
            if (post.replies) {
              const reply = post.replies.find(r => r.reply_id === parseInt(id, 10));
              if (reply) {
                reply.upvotes = updated.upvotes;
                reply.downvotes = updated.downvotes;
                break;
              }
            }
          }
        }
        renderFeed(); // simple enough for now
      } catch (err) {
        toast(err.message, 'error');
        voteBtn.disabled = false;
      }
      return;
    }

    // 2. Toggle Reply Form
    const toggleBtn = e.target.closest('.reply-toggle-btn');
    if (toggleBtn) {
      const postId = toggleBtn.dataset.postId;
      const form = document.getElementById(`reply-form-${postId}`);
      if (form) {
        form.style.display = form.style.display === 'none' ? 'block' : 'none';
      }
      return;
    }

    // 3. Submit Reply
    const submitBtn = e.target.closest('.reply-submit-btn');
    if (submitBtn) {
      const postId = submitBtn.dataset.postId;
      const input = document.getElementById(`reply-input-${postId}`);
      const content = input?.value.trim();
      
      if (!content) {
        toast('Reply content cannot be empty', 'error');
        return;
      }

      submitBtn.disabled = true;
      submitBtn.textContent = '...';
      try {
        const newReply = await api.post(`/forum/${postId}/reply`, { content });
        const post = posts.find(p => p.post_id === parseInt(postId, 10));
        if (post) {
          if (!post.replies) post.replies = [];
          post.replies.push(newReply);
        }
        toast('Reply posted', 'success');
        renderFeed();
      } catch (err) {
        toast(err.message, 'error');
        submitBtn.disabled = false;
        submitBtn.textContent = 'Submit Reply';
      }
      return;
    }
  });

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
