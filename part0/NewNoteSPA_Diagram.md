```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant Server

    User->>Browser: Writes note in text field
    User->>Browser: Clicks 'Save' button
    Browser->>Server: POST /new_note (with JSON data)
    Server-->>Browser: Responds with success
    Browser->>Browser: Updates local note list
    Browser->>Browser: Re-renders updated note list
```