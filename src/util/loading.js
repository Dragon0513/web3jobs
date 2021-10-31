export const loading = () => {
    return (
        <div class="flex justify-center items-center bg-gray">
            <div class="loader bg-white p-5 rounded-full flex space-x-3">
                <div class="w-5 h-5 bg-gray-darkest rounded-full animate-bounce"></div>
                <div class="w-5 h-5 bg-gray-darkest rounded-full animate-bounce"></div>
                <div class="w-5 h-5 bg-gray-darkest rounded-full animate-bounce"></div>
            </div>

        </div>
    )
}