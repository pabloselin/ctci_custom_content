import {
	FormFileUpload,
	Card,
	CardBody,
	ExternalLink,
	PanelRow,
	Text,
} from "@wordpress/components";
import handleUpload from "../utils/handleUpload.js";
import { select, withSelect, withDispatch } from "@wordpress/data";
import { url } from "@wordpress/url";
import { compose } from "@wordpress/compose";
//import InfoFile from "./fields/InfoFile.js";
import { __ } from "@wordpress/i18n";

const FormFieldPdf = (props) => {
	return (
		<>
			{props.doc_info !== null && props.doc_file_slug ? (
				<PanelRow>
					<p>Archivo:</p>
					<p>
						<ExternalLink href={props.doc_info[0].source_url}>
							{props.doc_info[0].title.rendered}
						</ExternalLink>
					</p>
				</PanelRow>
			) : (
				""
			)}
			<FormFileUpload
				accept={props.accept}
				onChange={() =>
					props.putFileandField(event.target.files[0], props.field)
				}
				icon="insert"
			>
				{props.children}
			</FormFileUpload>
		</>
	);
};

const applyWithSelect = withSelect((select, ownProps) => {
	let currentSlug = select("core/editor").getEditedPostAttribute("meta")[
		ownProps.field
	];
	let docInfo = select("core").getEntityRecords("postType", "attachment", {
		slug: currentSlug,
	});
	return {
		doc_file_slug: currentSlug,
		doc_info: docInfo,
	};
});

const applyWithDispatch = withDispatch((dispatch, ownProps) => {
	return {
		putFileandField: (files, field) => {
			handleUpload(files, field);
		},
	};
});

export default compose(applyWithSelect, applyWithDispatch)(FormFieldPdf);
