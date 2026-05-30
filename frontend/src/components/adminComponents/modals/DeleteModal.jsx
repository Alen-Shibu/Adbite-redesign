import React from 'react'
import styles from './DeleteModal.module.css'

const DeleteModal = ({toggleDeleteModal}) => {
  return (
    <>
      <div onClick={toggleDeleteModal} className={styles.blurred_background}>
      <div className={styles.delete_modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.delete_header}>
            <div>
            <h5>continue</h5>
            <h1>Delete District</h1>
            </div>
            <button onClick={toggleDeleteModal}>
                <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
        </div>

        <div className={styles.delete_middle}>
            <div className={styles.delete_icon}>
                <svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6l-1 14H6L5 6"></path><path d="M10 11v6M14 11v6"></path><path d="M9 6V4h6v2"></path></svg>
            </div>
            <div className={styles.delete_title}>Are you sure</div>
            <div>
                <p>This will remove <span>"Ernakulam"</span> from the list</p>
            </div>
        </div>

        <div className={styles.delete_footer}>
            <button className={styles.btn_ghost} onClick={toggleDeleteModal}>Cancel</button>
            <button className={styles.btn_danger}>
                <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6l-1 14H6L5 6"></path></svg>
                Delete
            </button>
        </div>
      </div>
      </div>
    </>
    
  )
}

export default DeleteModal
