import { AiOutlineFileAdd } from "react-icons/ai"
import { FcVoicePresentation } from "react-icons/fc"
function Sidebar({
  notes,
  onAddNote,
  onDeleteNote,
  activeNote,
  setActiveNote,
}) {
  const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified )
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>
          NoteEx <FcVoicePresentation size={56} />
        </h1>

        <button onClick={onAddNote}>
          <AiOutlineFileAdd size={42} />
        </button>
      </div>
      <div className="app-sidebar-notes">
        {sortedNotes.map((note) => (
          <div
            className={`app-sidebar-note ${note.id === activeNote && "active"}`}
            onClick={() => setActiveNote(note.id)}
          >
            <div className="sidebar-note-title">
              <strong>{note.title}</strong>
              <button onClick={() => onDeleteNote(note.id)}>Delete</button>
            </div>

            <p>{note.body && note.body.substr(0, 100) + "..."}</p>

            <small className="note-meta">
              Last Modified{" "}
              {new Date(note.lastModified).toLocaleDateString("en-IN", {
                minute: "2-digit",
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
