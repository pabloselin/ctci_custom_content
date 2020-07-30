import { registerPlugin } from "@wordpress/plugins";
import { PluginSidebar, PluginSidebarMoreMenuItem } from "@wordpress/edit-post";
import { PanelBody } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { select, withSelect, withDispatch } from "@wordpress/data";
import { compose } from "@wordpress/compose";

import YearField from "./fields/YearField.js";
import PdfFileUpload from "./fields/PdfFileUpload.js";
import MdFileUpload from "./fields/MdFileUpload.js";
import MonthField from "./fields/MonthField.js";
import InfoFile from "./fields/InfoFile.js";

let DocMetaFields = (props) => {
	return (
		<>
			<PanelBody
				title={__("Archivo", "ctci")}
				icon="media-document"
				initialOpen={true}
			>
				<PdfFileUpload />
				<InfoFile field="_ctci_doc_file_pdf_id" />
				<MdFileUpload />
				<InfoFile field="_ctci_doc_file_md_id" />
				<YearField />
				<MonthField />
			</PanelBody>
		</>
	);
};

registerPlugin("ctci-sidebar", {
	icon: "media-document",
	render: () => {
		const postType = select("core/editor").getCurrentPostType();

		if (postType === "ctci_doc") {
			return (
				<>
					<PluginSidebarMoreMenuItem target="ctci_docs_sidebar">
						{__("Información documento", "ctci")}
					</PluginSidebarMoreMenuItem>
					<PluginSidebar
						name="ctci_docs_sidebar"
						title={__("Información del Documento", "ctci")}
					>
						<DocMetaFields />
					</PluginSidebar>
				</>
			);
		} else {
			return null;
		}
	},
});
