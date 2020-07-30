import { FormFileUpload } from "@wordpress/components";
import handleUpload from "../utils/handleUpload.js";
import { __ } from "@wordpress/i18n";

export default (props) => {
	return (
		<FormFileUpload
			accept=".md"
			onChange={() =>
				handleUpload(event.target.files, "_ctci_doc_file_md_id")
			}
			icon="insert"
		>
			{__("Subir archivo Markdown o TXT", "ctci")}
		</FormFileUpload>
	);
};
