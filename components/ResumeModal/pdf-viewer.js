import { useState } from 'react';
// import default react-pdf entry
import { Document, Page, pdfjs } from 'react-pdf';
// import pdf worker as a url, see `next.config.js` and `pdf-worker.js`
import workerSrc from '../../pdf-worker';

import { PDFDocumentWrapper } from './styles';

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

export default function PDFViewer() {
	const [file] = useState('./resume.pdf');

	return (
		<PDFDocumentWrapper>
			<Document file={file}>
				<Page pageNumber={1} />
			</Document>
		</PDFDocumentWrapper>
	);
}
