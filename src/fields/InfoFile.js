import { Card, CardBody } from "@wordpress/components";
import { select } from "@wordpress/data";

let handleFileName = (fieldProp) => {
	let id = wp.data.select("core/editor").getEditedPostAttribute("meta")[
		fieldProp
	];
	return id;
};

let InfoFile = (props) => {
	return (
		<Card>
			<CardBody>Archivo: {handleFileName(props.field)}</CardBody>
		</Card>
	);
};

export default InfoFile;
