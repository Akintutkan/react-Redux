import React from 'react'
import { useDispatch } from 'react-redux'
import { clearCart } from '../features/cart/cartSlice'
import { closeModal } from '../features/modal/modalSlice'

const Modal = () => {
    const dispatch = useDispatch()
  return (
    <aside className="modal-container">
        <div className='modal'>
            <h4>Bütün ürünleri Kaldır?</h4>
            <div  className='btn-container'>
                <button type="button" className='btn confirm-btn' onClick={()=>{
                    dispatch(clearCart())
                    dispatch(closeModal())
                }}>
                    Onayla</button> 
                <button type="button" 
                className='btn confirm-btn' 
                onClick= {() => dispatch(closeModal())}>Reddet</button> 
            </div>
        </div>
    </aside>
  )
}

export default Modal