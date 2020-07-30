import { Card, CardBody } from "@wordpress/components";
import { select } from "@wordpress/data";

let handleFileName = (fieldProp) => {
	let field = wp.data.select("core/editor").getEditedPostAttribute("meta")[
		fieldProp
	];
	return field;
};

let InfoFile = (props) => {
	return (
		<Card>
			<CardBody>Archivo: {handleFileName(props.field)}</CardBody>
		</Card>
	);
};

export default InfoFile;
