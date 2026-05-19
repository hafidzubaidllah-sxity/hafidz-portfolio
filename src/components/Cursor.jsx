import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current

    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0
    let hovering = false
    let raf

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      // Dot follows instantly — no lag
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`
    }

    const onEnter = () => { hovering = true }
    const onLeave = () => { hovering = false }

    // Use event delegation instead of per-element listeners
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest('a, button, [data-cursor]')) onEnter()
      else onLeave()
    })

    window.addEventListener('mousemove', onMove, { passive: true })

    const animate = () => {
      // Lerp factor — higher = snappier ring
      const lerp = 0.18
      ringX += (mouseX - ringX) * lerp
      ringY += (mouseY - ringY) * lerp

      const size = hovering ? 48 : 32
      const offset = size / 2

      ring.style.transform = `translate(${ringX - offset}px, ${ringY - offset}px)`
      ring.style.width = size + 'px'
      ring.style.height = size + 'px'
      ring.style.opacity = hovering ? '0.7' : '0.4'

      raf = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      {/* Dot — instant */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '6px',
          height: '6px',
          background: '#F5F5F5',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
          willChange: 'transform',
        }}
      />
      {/* Ring — smooth lag */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '32px',
          height: '32px',
          border: '1px solid rgba(176,176,176,0.5)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9998,
          willChange: 'transform, width, height',
          transition: 'width 0.15s ease, height 0.15s ease, opacity 0.15s ease',
        }}
      />
    </>
  )
}
