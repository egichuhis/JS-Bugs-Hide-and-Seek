# JS-Bugs-Hide-and-Seek
JavaScript Debugging Exercise

Debugging JavaScript code using the Chrome DevTools Sources panel involves setting breakpoints, stepping through code, inspecting variables, and understanding the flow of execution. Let's walk through the process step by step using the code you provided with introduced bugs:

1. **Open DevTools:**
   Open your webpage in Google Chrome and open DevTools by pressing `Ctrl + Shift + I` (or `Cmd + Option + I` on macOS) or right-clicking on the page and selecting "Inspect".

2. **Navigate to the Sources Panel:**
   In the DevTools window, click on the "Sources" tab.

3. **Find Your JavaScript File:**
   Navigate to the JavaScript file that contains the code you want to debug. You can usually find it under the "file://" section on the left sidebar, or you might need to navigate through the website's file structure.

4. **Set Breakpoints:**
   Click on the line numbers in your code to set breakpoints. Set breakpoints on the lines you want to pause the execution for inspection. For example, you might want to set breakpoints on lines within the `addNumbers` function, where you calculate the `sum`, and where you set the `innerHTML`.

5. **Reload the Page:**
   Refresh your webpage to trigger the execution of your JavaScript code. When the code execution hits a breakpoint, it will pause, and you'll see your code in the DevTools panel.

6. **Step Through the Code:**
   Use the controls at the top of the Sources panel to step through your code:
   - Use the "Resume script execution" button (play icon) to continue execution until the next breakpoint.
   - Use the "Step over next function call" button (down arrow) to step over function calls.
   - Use the "Step into next function call" button (right arrow) to step into function calls.
   - Use the "Step out of current function" button (up arrow) to step out of a function.

7. **Inspect Variables:**
   As you step through the code, you can inspect the values of variables in the "Scope" section of the right sidebar. You should see the values change as you step through the code.

8. **Fix Bugs:**
   Identify the bugs by checking variable values, function behavior, and other factors. Once you've identified the issues, make the necessary code changes in the DevTools and observe how they affect the code's behavior.

9. **Continue Debugging:**
   Continue stepping through the code, fixing bugs, and observing changes until your code works as expected.

10. **Remove Breakpoints:**
    Once you've finished debugging, you can remove the breakpoints you set by clicking on the line numbers again.

11. **Close DevTools:**
    Close DevTools when you're done debugging.

Remember that this is a general overview of the debugging process in Chrome DevTools. The specific steps you take might vary based on your code and the bugs you encounter.
