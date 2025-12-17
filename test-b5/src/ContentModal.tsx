import Modal from 'react-modal'
import { Outlet } from "react-router"
import { useEffect } from 'react'

// Set app element for accessibility
// if (typeof document !== 'undefined') {
//   Modal.setAppElement('#test-root')
// }

function ContentModal() {
    useEffect(() => {
        document.body.style.overflow = 'hidden'
  
      return () => {
        document.body.style.overflow = ''
      }
    }, [])

  return (
    <Modal
      isOpen={true}
      onRequestClose={() => {
        window.location.hash = ''
      }}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        },
        content: {
          position: 'relative',
          inset: 'auto',
          maxWidth: '1400px',
          maxHeight: '90vh',
          padding: '2rem',
          borderRadius: '8px',
          border: '1px solid #ccc',
          background: '#fff',
          overflow: 'auto'
        }
      }}
      contentLabel="Personality Test Modal"
    >
      <button
        onClick={() => window.location.hash = ''}
        style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          background: 'transparent',
          border: 'none',
          fontSize: '2rem',
          cursor: 'pointer',
          color: '#666',
          lineHeight: 1,
          padding: '0.5rem',
          zIndex: 1
        }}
        aria-label="Close modal"
      >
        ×
      </button>
      <Outlet />
    </Modal>
  )
}

export default ContentModal
