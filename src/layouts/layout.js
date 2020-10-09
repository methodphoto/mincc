import React from "react"

export default function Layout({ children}) {
	return (
		<div style={{ margin: `20 auto`, maxWidth: 650, padding: `0 1rem`, fontFamily: `Helvetica, sans-serif`, }}>
			{children}
		</div>	
	)
}