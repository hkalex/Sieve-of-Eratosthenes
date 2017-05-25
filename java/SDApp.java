public class SDApp {
    public static void main(String[] args) {
        int cnt = 100000000;
        int[] arr = new int[cnt];
        
        for(int i=0; i<cnt; i++) {
            arr[i] = i;
        }

        long stime = System.currentTimeMillis();
        double sd = SDApp.calculateSD(arr);
        long etime = System.currentTimeMillis();
        System.out.println(sd);
        System.out.println(etime - stime);

    }

    public static double calculateSD(int[] arr) {
        // find average first
        int l = arr.length;
        double avg = 0;
        for(int i=0; i<l; i++) {
            avg += arr[i];
        }
        avg = avg / l;

        // find standard deviation
        double sum2 = 0;
        for(int i=0; i<l; i++) {
            sum2 += Math.pow((arr[i] - avg ), 2);
        }
        sum2 = sum2 / l;
        sum2 = Math.sqrt(sum2);
        return sum2;
    }
}
