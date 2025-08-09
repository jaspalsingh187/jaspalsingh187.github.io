// functionality for showing/hiding the comments section

const showHideBtn = document.querySelector('.show-hide');
const commentWrapper = document.querySelector('.comment-wrapper');

// Make the toggle accessible via keyboard and screen readers
if (showHideBtn) {
  showHideBtn.setAttribute('tabindex', '0');    
  showHideBtn.setAttribute('role', 'button');   
  // Link control to the panel
  if (commentWrapper && !commentWrapper.id) commentWrapper.id = 'comments';
  if (commentWrapper) showHideBtn.setAttribute('aria-controls', commentWrapper.id);
  showHideBtn.setAttribute('aria-expanded', 'false');
}

if (commentWrapper) {
  commentWrapper.style.display = 'none';
  commentWrapper.setAttribute('aria-hidden', 'true');
}

showHideBtn.onclick = function() {
  const isHidden = !commentWrapper || commentWrapper.style.display === 'none';
  if (showHideBtn) {
    showHideBtn.textContent = isHidden ? 'Hide comments' : 'Show comments';
    showHideBtn.setAttribute('aria-expanded', String(isHidden));
  }
  if (commentWrapper) {
    commentWrapper.style.display = isHidden ? 'block' : 'none';
    commentWrapper.setAttribute('aria-hidden', String(!isHidden));
  }
};

// Activate with Enter or Space as well as click
showHideBtn.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    showHideBtn.click();
  }
});

// functionality for adding a new comment via the comments form

const form = document.querySelector('.comment-form');
const nameField = document.querySelector('#name');
const commentField = document.querySelector('#comment');
const list = document.querySelector('.comment-container');

form.onsubmit = function(e) {
  e.preventDefault();
  submitComment();
};

function submitComment() {
  const listItem = document.createElement('li');
  const namePara = document.createElement('p');
  const commentPara = document.createElement('p');
  const nameValue = nameField.value;
  const commentValue = commentField.value;

  namePara.textContent = nameValue;
  commentPara.textContent = commentValue;

  list.appendChild(listItem);
  listItem.appendChild(namePara);
  listItem.appendChild(commentPara);

  nameField.value = '';
  commentField.value = '';
}
