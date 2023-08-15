(ns services.user-service.p-user-service)


(defprotocol PUserService

  (create-user!
    [self oauth-github-id]
    "Creates a new user entry in the database and returns it.")

  (git-id-in-use?
    [self oauth-github-id]
    "Checks if the given github-id is already in use or not. Returns true or false.")

  (get-user-id-by-git-id
    [self oauth-github-id]
    "Gets the user id associated with the given github-id, returns nil if there is none."))
