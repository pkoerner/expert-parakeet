(ns services.correction-service.p-correction-service)


(defprotocol PCorrectionService

  (get-corrections-from-user-as
    [self user-id role]
    "Gets the corrections from a single user by their role. (Either :corrector or :student (for now, roles aren't yet implemented to this extent))")

  (add-correction!
    [self answer-id correction]
    "Adds correction into database"))