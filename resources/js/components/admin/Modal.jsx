import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./Modal.css";

const Modal = ({ handleClose, show, title, children }) => {
	const showHideClassName = show ? "modal display-block" : "modal display-none";
	return (
		<div className={showHideClassName}>
			<section className="modal-main">
				<div className="modal-header">
					<h3 className="title">{title}</h3>
					{<CloseIcon onClick={handleClose} />}
				</div>

				<div className="body">{children}</div>
			</section>
		</div>
	);
};

export default Modal;
