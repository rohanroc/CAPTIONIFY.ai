import React from 'react'

function TextInput() {
    return (
        <div>
            <div className="max-w-sm space-y-3">
                <textarea
                    className="m-auto xl:w-[200%] py-3 px-4 block border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    placeholder="Give your prompt to generate captions (Optional)"
                    rows={1}
                />
            </div>

        </div>
    )
}

export default TextInput
