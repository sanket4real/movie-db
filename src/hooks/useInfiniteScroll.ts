import { useEffect, useRef, useState } from "react";

export const useInfiniteScroll = (callback: () => void) => {
	const [isFetching, setIsFetching] = useState(false);
	const observer = useRef<IntersectionObserver | null>(null);

	const lastElementRef = (node: HTMLElement | null) => {
		if (observer.current) observer.current.disconnect();

		observer.current = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				setIsFetching(true);
			}
		});

		if (node) observer.current.observe(node);
	};

	useEffect(() => {
		if (!isFetching) return;

		callback();
		setIsFetching(false);
	}, [isFetching]);

	return { lastElementRef };
};
