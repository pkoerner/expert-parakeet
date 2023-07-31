(ns services.user.p-user-service)

(defprotocol PUserService
  
  (get-user-by-handle
    [_, handle]))