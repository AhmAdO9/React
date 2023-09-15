import React from 'react'

export default function Alert(props) {
  return (
    props.alrt && <div>
  <div style={{display: "flex",
    justifyContent: "space-between",height: "4em"
}} class={`alert alert-${props.type} alert-dismissible fade show`} role="alert">
   <strong>{props.alrt.type}</strong>{props.alrt.msg} 
  <button type="button" style={{position: "relative",
    top: "-17px"
}} class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
    </div>
  )
}
 