import { useSession } from "next-auth/react"

export const useSessionUser = () => {
    return useSession()
}