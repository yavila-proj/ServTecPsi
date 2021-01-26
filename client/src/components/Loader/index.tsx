import React from "react";

interface Props {
    type?: "full" | "block";
}
export const Loader: React.FC<Props> = ({ type = "full" }) => {
    if (type === "block") {
        return <div></div>;
    }

    return <div>loader...</div>;
};
