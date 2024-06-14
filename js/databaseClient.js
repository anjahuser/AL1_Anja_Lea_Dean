/* 
- Erlaubt die Kommunikation mit einer Datenbank via SQL und JavaScript zu Schulungszwecken.
- Verwenden Sie executeSqlQuery und insertInto.
- Sie müssen nicht im Detail verstehen, wie der Code funktioniert. 
*/

// Ändern Sie die folgenden beiden Werte, um ihre Datenbank zu verbinden.
const GROUP_NAME = "al1";
const PASSWORD = "xohegxjgmf958lqv";

const SERVER_URL = "https://ict-290.herokuapp.com/sql";
const databaseClient = {
  executeSqlQuery: async (sql) => {
    const payload = {
      group: GROUP_NAME,
      pw: PASSWORD,
      sql: sql,
    };
    try {
      const response = await fetch(SERVER_URL, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (result.error) {
        console.error(result.error);
      }
      return result;
    } catch (error) {
      console.error("DB error", error);
    }
  },
  /*
    Beispiel:
    - sqlTable: "user" // Name der Tabelle in der SQL Datenbank
    - formData: {
        // "email" Name der Spalte in der SQL Tabelle
        // "emailField.value" Eingabe des Benutzers aus dem Formularfeld
        email: emailField.value,
      }
     */
  insertInto: async (sqlTable, formData) => {
    let result = null;
    const fields = Object.keys(formData);
    const values = Object.values(formData);

    const sql = `INSERT INTO ${sqlTable} (${fields.join(
      ","
    )}) VALUES ('${values.join("','")}')`;
    try {
      result = await databaseClient.executeSqlQuery(sql);
    } catch (error) {
      console.error("Fehler bei der Datenbank: ", error);
    }
    return result;
  },
};
//run();
