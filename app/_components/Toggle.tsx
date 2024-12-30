import React from 'react'
import ReactToggle from "react-toggle"

const ToggleComponent = () => {
    const [isDark, setIsDark] = React.useState(false)

    return (
        <ReactToggle
          checked={isDark}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setIsDark(event.target.checked)}
          icons={{ checked: "🌙", unchecked: "🔆" }}
          aria-label="Dark mode toggle"
        />
      );
}

export default ToggleComponent