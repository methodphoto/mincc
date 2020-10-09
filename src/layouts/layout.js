import React from "react"

export default function Layout({ children}) {
	return (
		<div style={{ margin: `1rem auto`, maxWidth: 650, padding: `0 1rem`, fontFamily: `Helvetica, sans-serif`, }}>
			{children}
		</div>	
	)
}