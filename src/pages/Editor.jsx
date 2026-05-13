import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

export default function Editor() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p data-testid="editor-initial-content">Start writing your notes...</p>',
  })

  return (
    <section data-testid="editor-page">
      <h2 data-testid="editor-title">Editor</h2>
      <div className="editor-wrap" data-testid="editor-container">
        <EditorContent editor={editor} />
      </div>
    </section>
  )
}
