import { useState } from "react";

function Folder({ explorer }) {
    const [expand, setExpand] = useState(false)
    const [showInput, setShowInput] = useState({
        visible: false,
        isFolder: null
    })
    return explorer.isFolder ? (<div style={{ marginTop: 5 }}>
        <div className="folder" onClick={() => setExpand(!expand)}>
            <span>📁 {explorer.name}</span>
            <div>
                <button>Folder +</button>
                <button>File +</button>
            </div>
        </div>
        <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>{explorer.items.map((exp) => {
            return <Folder explorer={exp} key={exp.id} />
        })}</div>
    </div>) : (<span className="file">🗃️ {explorer.name}</span>)
}

export default Folder