/** BookEdit.tsx */
import { ReactElement } from "react"
/* ⚫️⚫️________________________________________________ */

type BookEditProps = {
	mockProp?: string
}

/// ___ <> styles <> ___
const customStyles = {
	backgroundColor: "#2f323a",
	marginTop: "5rem",
	padding: "0",
	width: "100%",
	borderRadius: "15px",
	
	h1: {
		padding: "55px",
		fontFamily: "Liberation Mono for Powerline",
		color: "mediumpurple",
		fontSize: "2.2rem",
		display: "grid",
		placeItems: "center",
	},
}
/* ⚫️⚫️________________________________________________ */

const BookEditComponent = ({ mockProp = 'BookEditComponent' }: BookEditProps): ReactElement => {
	
	// ⚫️⚫️ functions _________________
	
	
	// ⚫️⚫️________________________________________________
	return (
		//==== <>fragment</> ====
		<div style={ customStyles }>
        <h1 style={ customStyles.h1 }>
        @{ mockProp }
        </h1>
    </div>
	)
	// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰
}
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

// BookEditComponent.defaultProps = {
//    mockProp: "text default value",
// }
// ⚫️⚫️___________________________________________________
export default BookEditComponent
