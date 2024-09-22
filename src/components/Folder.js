function Folder({ explorer }) {
    console.log(explorer);

    return explorer.isFolder ? (<div style={{ marginTop: 5 }}>
        <div>
            <span>📁 {explorer.name}</span>
        </div>
        <div>{explorer.items.map((exp) => {
            return (
                <span>{exp.name}</span>
            )
        })}</div>
    </div>) : (<span>🗃️</span>)
}

export default Folder