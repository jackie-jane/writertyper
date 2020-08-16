import React from 'react';

function TextEditButton() {
  return (
    <Link to={`/edit/${author}/${element.id}`}>
      <button
        className='editButtonOnRead'>
        Edit
      </button>
    </Link>
  );
}
export default TextEditButton;
