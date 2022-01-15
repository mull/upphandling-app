package app.upphandling;

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

    
    /**
     * If your app has an @Override on onNewIntent in MainActivity.java ensure that function 
     * includes a super call on onNewIntent (if your MainActivity.java does not have an 
     * @Override for onNewIntent skip this):
     *
     * @Override
     * public void onNewIntent(Intent intent) {
     *   ...
     *   super.onNewIntent(intent);
     *   ...
     * }
     */


  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "Upphandling";
  }
}
