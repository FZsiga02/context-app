import { useContext } from "react";
import { ApiContext } from "../api/api";

export default function NetworkError() {
    const context = useContext(ApiContext);

    if (context.networkError) {
        return <p>Hálózati hiba!</p>;
    } else {
        return null;
    }
}
