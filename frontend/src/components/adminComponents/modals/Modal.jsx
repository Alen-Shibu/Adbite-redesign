import React, { useState } from 'react'
import styles from './Modal.module.css'

const Modal = ({toggleModal}) => {
  const [venues, setVenues] = useState([
    {
      name:'',
      latitude:'',
      longitude:''
    }
  ])

  const addVenues = () => {
    setVenues([...venues,{name:'',latitude:'',longitude:''}])
  }

  const deleteVenues = (indexToDelete) => {
    const updatedVenues = venues.filter((venue,idx)=>{
      return idx!==indexToDelete;
    })

    setVenues(updatedVenues)
  }

  return (
    <div className={styles.modal_container}>
        <div className={styles.modal_overlay} onClick={toggleModal}></div>
        <div className={styles.modal_contents}> 
            <div className={styles.modal_header}>
              <div>
                <h5>New Entry</h5>
                <h2>Add District</h2>
              </div>
              <button onClick={toggleModal}>
                <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>

            <div className={styles.modal_body}>
              <div className={styles.form_row}>
                <div className={styles.form_group}>
                  <label htmlFor="district">District Name</label>
                  <input type="text" id='district' placeholder='e.g. Ernakulam' />
                </div>
                <div className={styles.form_group}>
                  <label htmlFor="order">Order</label>
                  <input type="number" id='order' />
                </div>
              </div>

              <div className={styles.form_group}>
                <label htmlFor="description">Description (optional)</label>
                <textarea name="description" id="description" placeholder='Short note about this district…'></textarea>
              </div>

              <div className={styles.venue_section_header}>
                <span>Venue</span>
                <button onClick={addVenues} >
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                  Add Venue
                </button>
              </div>

              <div className={styles.venue_list}>
                {
                  venues.map((venue,idx)=>(
                    <div className={styles.venue_entry} key={idx}>
                      <div className={styles.venue_entry_top}>
                        <span>Venue {idx+1}</span>
                        <button type="button" onClick={()=> deleteVenues(idx)}><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
                      </div>
                      <div className={styles.form_group}>
                        <input type="text" placeholder='venue name'/>
                      </div>
                      <div className={styles.form_row}>
                        <input type="number" placeholder='Latitude'/>
                        <input type="number" placeholder='Longitude'/>
                      </div>
                  </div>
                  ))
                }
              </div>
            </div>
        </div>
    </div>
  )
}

export default Modal

