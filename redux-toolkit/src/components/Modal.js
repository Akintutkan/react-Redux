import React from 'react'

const Modal = () => {
  return (
    <aside className="modal-container">
        <div className='modal'>
            <h4>Bütün ürünleri Kaldır?</h4>
            <div  className='btn-container'>
                <button type="button" className='btn confirm-btn'>Onayla</button> 
                <button type="button" className='btn confirm-btn'>Reddet</button> 
            </div>
        </div>
    </aside>
  )
}

export default Modal