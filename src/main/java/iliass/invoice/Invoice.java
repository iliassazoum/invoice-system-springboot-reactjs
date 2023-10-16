package iliass.invoice;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import java.math.BigDecimal;
import java.util.Date;

@Data
@Entity
public class Invoice {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String itemName;
    private BigDecimal itemPrice;
    private int quantity;
    private String invoiceNumber;
    private BigDecimal total;
    
    @CreationTimestamp
    private Date creationDate;

    // Constructor
    public Invoice() {
        this.invoiceNumber = generateInvoiceNumber();
    }

    // Generate a unique invoice number
   // Generate a unique invoice number
private String generateInvoiceNumber() {
    long timestamp = System.currentTimeMillis();
    String invoiceNumber = "INV-" + timestamp;
    if (id != null) {
        invoiceNumber += id;
    }
    return invoiceNumber;
}


    // Calculate the total based on itemPrice and quantity
    public void calculateTotal() {
        total = itemPrice.multiply(BigDecimal.valueOf(quantity));
    }
}
