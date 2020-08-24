import { registerPlugin } from "@wordpress/plugins";
import { PluginSidebar, PluginSidebarMoreMenuItem } from "@wordpress/edit-post";
import { PanelBody, HorizontalRule } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { select, withSelect, withDispatch } from "@wordpress/data";
import { compose } from "@wordpress/compose";

import YearField from "./fields/YearField.js";
import FileUpload from "./fields/PdfFileUpload.js";
import MonthField from "./fields/MonthField.js";
import DayField from "./fields/DayField.js";

let DocMetaFields = (props) => {
	return (
		<>
			<PanelBody
				title={__("Archivo", "ctci")}
				icon="media-document"
				initialOpen={true}
			>
				<FileUpload field="_ctci_doc_file_pdf_slug" accept=".pdf">
					Subir PDF
				</FileUpload>
				<HorizontalRule />
				<FileUpload
					field="_ctci_doc_file_md_slug"
					accept=".md"
					contentsField="_ctci_doc_text_contents"
				>
					Subir Markdown o .txt
				</FileUpload>
				<HorizontalRule />
				<YearField />
				<HorizontalRule />
				<MonthField />
				<DayField />
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
						{__("Subir archivo", "ctci")}
					</PluginSidebarMoreMenuItem>
					<PluginSidebar
						name="ctci_docs_sidebar"
						title={__("Subir archivo", "ctci")}
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
