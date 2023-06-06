import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './App.css';
function App() {
  const editorRef = useRef();
  return (
    <div className="Main-Div">
         <h3>Description</h3>
      <div className="Editor-Div">
        <Editor
          onInit={(evt, editor) => (editorRef.current = editor)}
          apiKey="YOUR_TINYMCE_API_KEY"
        />
      </div>


     
      <Stack className="buttons" spacing={2} direction="row">
        <Button size="small" variant="contained">Submit</Button>
        <Button size="small" variant="text">Cancel</Button>
      </Stack>
    </div>

  );
}

export default App;
