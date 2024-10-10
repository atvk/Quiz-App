

const notificationMethods = [
  { id: 'Россия', title: 'Россия' },
  { id: 'Белорусия', title: 'Белорусия' },
  { id: 'Португалия', title: 'Португалия' },
]

export default function Questions() {
  return (
    <fieldset>
      <legend className="text-sm font-semibold leading-6 pb-5 text-gray-900">Первый вопрос</legend>
      <p className="mt-1 text-sm leading-6 text-gray-600">Москва, столица какой строны?</p>
      <div className="mt-6 space-y-6">
        {notificationMethods.map((notificationMethod) => (
          <div key={notificationMethod.id} className="flex items-center">
            <input
              defaultChecked={notificationMethod.id === 'Россия'}
              id={notificationMethod.id}
              name="notification-method"
              type="radio"
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label htmlFor={notificationMethod.id} className="ml-3 block text-sm font-medium leading-6 text-gray-900">
              {notificationMethod.title}
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  )
}