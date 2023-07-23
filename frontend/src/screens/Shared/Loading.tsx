import { Box } from "@mui/system";
import { centerItemFlex } from "../../utils/styles";
import CircularProgress from "@mui/material/CircularProgress";

const Loading = () => {
	return (
		<Box
			style={{
				height: "100vh",
				...centerItemFlex,
			}}
		>
			<CircularProgress />
		</Box>
	);
};

export default Loading;
