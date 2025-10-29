import React, { useRef } from 'react'

export default function SignupForm() {
  const formRef = useRef(null)

  function handleSubmit(e) {
    e.preventDefault()
    const form = formRef.current
    if (!form) return
    if (!form.checkValidity()) {
      return form.reportValidity()
    }
    // Mock submit for prototype
    const data = new FormData(form)
    const payload = Object.fromEntries(data.entries())
    alert('Signup OK (mock): ' + JSON.stringify(payload))
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-3 max-w-md">
      <div>
        <label className="block text-sm">Email</label>
        <input
          name="email"
          type="email"
          required
          onInput={e => {
            e.target.setCustomValidity('')
            if (!e.target.validity.valid) e.target.setCustomValidity('Please enter a valid email')
          }}
          className="mt-1 block w-full rounded border px-3 py-2 bg-white dark:bg-gray-700"
        />
      </div>

      <div>
        <label className="block text-sm">Password</label>
        <input
          name="password"
          type="password"
          minLength={8}
          required
          onInput={e => {
            if (e.target.value.length < 8) e.target.setCustomValidity('Minimum 8 characters')
            else e.target.setCustomValidity('')
          }}
          className="mt-1 block w-full rounded border px-3 py-2 bg-white dark:bg-gray-700"
        />
      </div>

      <div className="flex items-center gap-2">
        <button type="submit" className="px-4 py-2 rounded bg-blue-600 text-white">Sign up</button>
        <small className="text-xs text-gray-500">This is a client-side mock for the assignment.</small>
      </div>
    </form>
  )
}
