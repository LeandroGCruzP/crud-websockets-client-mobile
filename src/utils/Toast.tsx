import { ToastAndroid } from "react-native";

export const Toast = (message: string) => {
	ToastAndroid.showWithGravityAndOffset(
		message,
		ToastAndroid.LONG,
		ToastAndroid.TOP,
		25,
		50,
	)

	return
}
