import React from 'react';
import EditorTemplate from 'components/editor/EditorTemplate';
import EditorHeader from 'components/editor/EditorHeader';
import EditorPane from 'components/editor/EditorPane';
import EditorPreview from '../components/editor/EditorPreview';
const EditorPage = () => {
	return (  
		<div>
			<EditorTemplate
			header={<EditorHeader/>}
			editor={	<EditorPane/>}
			preview={<EditorPreview/>}
			/>
		
		</div>
	);
}
 
export default EditorPage;