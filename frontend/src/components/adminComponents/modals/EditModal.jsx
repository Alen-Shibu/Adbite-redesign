import React, { useState } from 'react'
import styles from './EditModal.module.css'
import axios from '../../../api/axios.js'
import toast from 'react-hot-toast';

const Modal = ({id,toggleEditModal}) => {

  const [formData, setFormData] = useState({
    district:id.district,
    description:id.description,
    order:id.order,
    venues: id.venues.map((v) => ({
        id:v._id,
        name:v.name,
        latitude:v.lat,
        longitude:v.lng
    }))
  })

  const handleChange = (e) => {
    const {name,value} = e.target;
    setFormData(prev => ({...prev,[name]:value}))
  }

  const handleVenueChange = (idx,e) => {
    const {name,value} = e.target;

    const updatedVenues = [...formData.venues];

    updatedVenues[idx][name] = value;

    setFormData(prev => ({
      ...prev,
      venues: updatedVenues
    }))
  }

  const payload = {
    district:formData.district,
    description:formData.description,
    order:Number(formData.order),
    venues: formData.venues.map(v => ({
      name:v.name,
      lat:Number(v.latitude),
      lng:Number(v.longitude)
    }))
  }

  const submitForm = async(e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`/locations/${id._id}`,payload);
      toast.success("District Edited Successfully")
    } catch (error) {
      console.log('Error in submitForm to Edit location',error.message)
      toast.error(error.response?.data?.message || "Editing District Failed")
    }
  }

  const addVenues = (e) => {
    e.preventDefault();

    const newVenue = {
      id: crypto.randomUUID(),
      name:'',
      latitude:'',
      longitude:''
    }

    setFormData(prev => ({
      ...prev,
      venues:[...prev.venues,newVenue]
    }))
  }

  const deleteVenues = (idToDelete) => {

    const updatedFormVenues = formData.venues.filter((venue)=>{
      return venue.id!==idToDelete;
    })

    setFormData(prev => ({
      ...prev,
      venues: updatedFormVenues
    }))
  }

  return (
    <div className={styles.modal_container}>
        <div className={styles.modal_overlay} onClick={toggleEditModal}></div>
        <div className={styles.modal_contents}> 
            <div className={styles.modal_header}>
              <div>
                <h5>New Entry</h5>
                <h2>Add District</h2>
              </div>
              <button type='button' onClick={toggleEditModal}>
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>

            <form onSubmit={submitForm}>
              <div className={styles.modal_body}>
                <div className={styles.form_row}>
                  <div className={styles.form_group}>
                    <label htmlFor="district">District Name</label>
                    <input value={formData.district} onChange={handleChange} name='district' type="text" id='district' placeholder='e.g. Ernakulam' />
                  </div>
                  <div className={styles.form_group}>
                    <label htmlFor="order">Order</label>
                    <input value={formData.order} onChange={handleChange} name='order' type="number" id='order' />
                  </div>
                </div>

                <div className={styles.form_group}>
                  <label htmlFor="description">Description (optional)</label>
                  <textarea value={formData.description} onChange={handleChange} name='description' id="description" placeholder='Short note about this district…'></textarea>
                </div>

                <div className={styles.venue_section_header}>
                  <span>Venue</span>
                  <button type='button' onClick={addVenues} >
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    Add Venue
                  </button>
                </div>

                <div className={styles.venue_list}>
                  {
                    formData.venues.map((venue,idx)=>(
                      <div className={styles.venue_entry} key={venue.id}>
                        <div className={styles.venue_entry_top}>
                          <span>Venue {idx+1}</span>
                          <button type="button" onClick={()=> deleteVenues(venue.id)}>
                            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <line x1="18" y1="6" x2="6" y2="18"></line>
                              <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                          </button>
                        </div>

                        <div className={styles.form_group}>
                          <input
                            type="text"
                            name='name'
                            value={formData.venues[idx]?.name}
                            onChange={(e)=> handleVenueChange(idx,e)}
                            placeholder='venue name'
                          />
                        </div>

                        <div className={styles.form_row}>
                          <input
                            name='latitude'
                            type="number"
                            value={formData.venues[idx]?.latitude}
                            onChange={(e)=> handleVenueChange(idx,e)}
                            placeholder='Latitude'
                          />

                          <input
                            name='longitude'
                            type="number"
                            value={formData.venues[idx]?.longitude}
                            onChange={(e)=> handleVenueChange(idx,e)}
                            placeholder='Longitude'
                          />
                        </div>
                    </div>
                    ))
                  }
                </div>
              </div>

              <div className={styles.modal_footer}>
                <button type='button' onClick={toggleEditModal} className={styles.btn_ghost}>Cancel</button>

                <button type='submit' className={styles.btn_primary}>
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Save
                </button>
              </div>
            </form>

        </div>
    </div>
  )
}

export default Modal